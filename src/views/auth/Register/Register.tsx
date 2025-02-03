import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { routesPath } from "@/routes/routesPath";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { useIntl, FormattedMessage } from "react-intl";
import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/common/FormField";
import {
  useGetUserByToken,
  useRegisterAndVerify,
} from "@/api/hooks/user.hooks";
import { PasswordChecker } from "./PasswordChecker";
import { defaultValues, initialValues } from "./Register.utils";
import { formFields, formSchema, type FormSchema } from "./Register.schema";

export const Register = () => {
  const { formatMessage } = useIntl();
  const { token } = useParams<{ token: string }>();

  const { data } = useGetUserByToken({ token: token || "" });

  const form = useForm<FormSchema>({
    values: initialValues(data),
    defaultValues: defaultValues,
    resolver: zodResolver(formSchema),
  });

  const currentPassword = form.watch(formFields.password);

  const { isPending, mutateAsync: registerAndVerifyUser } =
    useRegisterAndVerify();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async ({ confirmPassword, ...values }: FormSchema) => {
    await registerAndVerifyUser({
      ...values,
      id: data?.id || "",
    });

    form.reset(defaultValues);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold tracking-tight my-5">
        <FormattedMessage id="view.register" />
      </h1>
      <Card>
        <CardContent className="w-[90vw] p-10 lg:w-[500px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name={formFields.name}
                component={(field) => <Input {...field} />}
                label={formatMessage({ id: "formField.user-name" })}
              />
              <FormField
                control={form.control}
                name={formFields.surname}
                component={(field) => <Input {...field} />}
                label={formatMessage({ id: "formField.user-surname" })}
              />
              <FormField
                control={form.control}
                name={formFields.email}
                label={formatMessage({ id: "formField.email" })}
                component={(field) => (
                  <Input {...field} disabled value={data?.email} />
                )}
              />
              <FormField
                control={form.control}
                name={formFields.password}
                label={formatMessage({ id: "formField.password" })}
                component={(field) => <Input type="password" {...field} />}
              />
              {!!currentPassword && (
                <PasswordChecker password={currentPassword} />
              )}
              <FormField
                control={form.control}
                name={formFields.confirmPassword}
                label={formatMessage({ id: "formField.confirm-password" })}
                component={(field) => <Input type="password" {...field} />}
              />

              <div className="flex justify-between my-5">
                <span>
                  <FormattedMessage id="view.role" />
                </span>
                <Badge>{data?.role.name}</Badge>
              </div>
              <div className="flex my-5 items-center">
                <Separator className="shrink" />
                <Link to={routesPath.auth.login} className="px-5 text-nowrap">
                  <FormattedMessage id="view.back-to-login" />
                </Link>
                <Separator className="shrink" />
              </div>

              <Button type="submit" className=" w-full" isLoading={isPending}>
                <FormattedMessage id="view.register" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
