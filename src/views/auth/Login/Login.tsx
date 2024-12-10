import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { Card, CardContent } from "@/components/ui/card";
import { useLogin } from "@/api/hooks/auth.hooks";
import { formFields, formSchema, FormSchema } from "./Login.schema";
import { defaultValues } from "./Login.utils";
import { FormattedMessage, useIntl } from "react-intl";

export const Login = () => {
  const { formatMessage } = useIntl();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const { mutateAsync: loginUser, isPending } = useLogin();

  const onSubmit = async (values: FormSchema) => {
    await loginUser(values);

    form.reset(defaultValues);
  };

  const handleSave = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold tracking-tight my-5">
        <FormattedMessage id="view.login" />
      </h1>
      <Card>
        <CardContent className="w-[90vw] p-10 lg:w-[500px]">
          <Form {...form}>
            <FormField
              label={formatMessage({ id: "formField.email" })}
              control={form.control}
              name={formFields.email}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label={formatMessage({ id: "formField.password" })}
              control={form.control}
              name={formFields.password}
              component={(field) => <Input type="password" {...field} />}
            />
          </Form>
          <Button
            className="my-5 w-full"
            onClick={handleSave}
            isLoading={isPending}
          >
            <FormattedMessage id="view.login" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
