import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useLogin } from "@/api/hooks/auth.hooks";
import { Button } from "@/components/common/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIntl, FormattedMessage } from "react-intl";
import { Card, CardContent } from "@/components/ui/card";
import { FormField } from "@/components/common/FormField";
import { defaultValues } from "./Login.utils";
import { formFields, formSchema, type FormSchema } from "./Login.schema";

export const Login = () => {
  const { formatMessage } = useIntl();
  const form = useForm<FormSchema>({
    defaultValues: defaultValues,
    resolver: zodResolver(formSchema),
  });

  const { isPending, mutateAsync: loginUser } = useLogin();

  const onSubmit = async (values: FormSchema) => {
    await loginUser(values);

    form.reset(defaultValues);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-semibold tracking-tight my-5">
        <FormattedMessage id="view.login" />
      </h1>
      <Card>
        <CardContent className="w-[90vw] p-10 lg:w-[500px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name={formFields.email}
                component={(field) => <Input {...field} />}
                label={formatMessage({ id: "formField.email" })}
              />
              <FormField
                control={form.control}
                name={formFields.password}
                label={formatMessage({ id: "formField.password" })}
                component={(field) => <Input type="password" {...field} />}
              />
              <Button
                type="submit"
                isLoading={isPending}
                className="my-5 w-full"
              >
                <FormattedMessage id="view.login" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
