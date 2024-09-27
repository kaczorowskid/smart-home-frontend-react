import { FormField } from "@/components/common/FormField";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  defaultValues,
  formFields,
  formSchema,
  FormSchema,
} from "./LoginForm.schema";
import { useLogin } from "./LoginForm.hooks";
import { Button } from "@/components/common/Button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { routesPath } from "@/routes/routesPath";

export const LoginForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    values: defaultValues,
  });

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = async (values: FormSchema) => {
    loginUser(values);
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
          <div className="flex my-5 items-center">
            <Separator className="shrink" />
            <Link className="px-5 text-nowrap" to={routesPath.auth.register}>
              Register now
            </Link>
            <Separator className="shrink" />
          </div>

          <Button
            className=" w-full"
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
