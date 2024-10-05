import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/common/Button";
import { Separator } from "@/components/ui/separator";
import { formFields, FormSchema, formSchema } from "./RegisterForm.schema";
import { useGetUserByToken, useRegisterAndVerify } from "./RegisterForm.hooks";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";
import { Badge } from "@/components/ui/badge";
import { defaultValues, initialValues } from "./RegisterForm.utils";

export const RegisterForm = () => {
  const { token } = useParams<{ token: string }>();

  const { data } = useGetUserByToken({ token: token || "" });

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
    values: initialValues(data),
  });

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
      <h1 className="text-4xl font-semibold tracking-tight my-5">Register</h1>
      <Card>
        <CardContent className="w-[500px] p-10">
          <Form {...form}>
            <FormField
              label="Name"
              control={form.control}
              name={formFields.name}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label="Surname"
              control={form.control}
              name={formFields.surname}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label="Email"
              control={form.control}
              name={formFields.email}
              component={(field) => (
                <Input {...field} value={data?.email} disabled />
              )}
            />
            <FormField
              label="Password"
              control={form.control}
              name={formFields.password}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label="Confirm password"
              control={form.control}
              name={formFields.confirmPassword}
              component={(field) => <Input {...field} />}
            />
          </Form>
          <div className="flex justify-between my-5">
            <span>Role</span>
            <Badge>{data?.role}</Badge>
          </div>
          <div className="flex my-5 items-center">
            <Separator className="shrink" />
            <Link className="px-5 text-nowrap" to={routesPath.auth.login}>
              Back to login
            </Link>
            <Separator className="shrink" />
          </div>

          <Button
            className=" w-full"
            onClick={handleSave}
            isLoading={isPending}
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
