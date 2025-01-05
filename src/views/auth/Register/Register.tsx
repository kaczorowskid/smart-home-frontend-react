import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { Badge } from "@/components/ui/badge";
import {
  useGetUserByToken,
  useRegisterAndVerify,
} from "@/api/hooks/user.hooks";
import { formFields, formSchema, FormSchema } from "./Register.schema";
import { defaultValues, initialValues } from "./Register.utils";
import { FormattedMessage, useIntl } from "react-intl";
import { PasswordChecker } from "./PasswordChecker";

export const Register = () => {
  const { formatMessage } = useIntl();
  const { token } = useParams<{ token: string }>();

  const { data } = useGetUserByToken({ token: token || "" });

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    values: initialValues(data),
  });

  const currentPassword = form.watch(formFields.password);

  const { mutateAsync: registerAndVerifyUser, isPending } =
    useRegisterAndVerify();

  const onSubmit = async ({ confirmPassword, ...values }: FormSchema) => {
    await registerAndVerifyUser({
      ...values,
      id: data?.id || "",
    });

    form.reset(defaultValues);
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold tracking-tight my-5">
        <FormattedMessage id="view.register" />
      </h1>
      <Card>
        <CardContent className="w-[90vw] p-10 lg:w-[500px]">
          <Form {...form}>
            <FormField
              label={formatMessage({ id: "formField.user-name" })}
              control={form.control}
              name={formFields.name}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label={formatMessage({ id: "formField.user-surname" })}
              control={form.control}
              name={formFields.surname}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label={formatMessage({ id: "formField.email" })}
              control={form.control}
              name={formFields.email}
              component={(field) => (
                <Input {...field} value={data?.email} disabled />
              )}
            />
            <FormField
              label={formatMessage({ id: "formField.password" })}
              control={form.control}
              name={formFields.password}
              component={(field) => <Input type="password" {...field} />}
            />
            {!!currentPassword && (
              <PasswordChecker password={currentPassword} />
            )}
            <FormField
              label={formatMessage({ id: "formField.confirm-password" })}
              control={form.control}
              name={formFields.confirmPassword}
              component={(field) => <Input type="password" {...field} />}
            />
          </Form>
          <div className="flex justify-between my-5">
            <span>
              <FormattedMessage id="view.role" />
            </span>
            <Badge>{data?.role.name}</Badge>
          </div>
          <div className="flex my-5 items-center">
            <Separator className="shrink" />
            <Link className="px-5 text-nowrap" to={routesPath.auth.login}>
              <FormattedMessage id="view.back-to-login" />
            </Link>
            <Separator className="shrink" />
          </div>

          <Button
            className=" w-full"
            onClick={handleSave}
            isLoading={isPending}
          >
            <FormattedMessage id="view.register" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
