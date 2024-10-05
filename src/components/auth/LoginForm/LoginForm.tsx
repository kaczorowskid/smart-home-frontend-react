import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formFields, formSchema, FormSchema } from "./LoginForm.schema";
import { useLogin } from "./LoginForm.hooks";
import { Button } from "@/components/common/Button";
import { Card, CardContent } from "@/components/ui/card";
import { defaultValues } from "./LoginForm.utils";

export const LoginForm = () => {
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
      <h1 className="text-4xl font-semibold tracking-tight my-5">Login</h1>
      <Card>
        <CardContent className="w-[500px] p-10">
          <Form {...form}>
            <FormField
              label="Email"
              control={form.control}
              name={formFields.email}
              component={(field) => <Input {...field} />}
            />
            <FormField
              label="Password"
              control={form.control}
              name={formFields.password}
              component={(field) => <Input {...field} />}
            />
          </Form>
          <Button
            className="my-5 w-full"
            onClick={handleSave}
            isLoading={isPending}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
