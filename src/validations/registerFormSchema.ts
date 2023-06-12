import { z } from "zod";

const registerFormSchema = z.object({
  name: z.string().nonempty("Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phoneNumber: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
  course: z
    .enum(
      [
        "Fullstack Web Development Bootcamp",
        "Khoá học Java",
        "Khoá học Data Science - Python",
      ],
      { required_error: "Chọn khoá học" }
    )
    .optional(),
});

export type RegisterForm = z.infer<typeof registerFormSchema>;
export type Course = z.infer<typeof registerFormSchema>["course"];

export default registerFormSchema;
