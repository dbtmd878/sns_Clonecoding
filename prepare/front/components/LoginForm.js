import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoggedIn((prev) => !prev);
    console.log(JSON.stringify(data));
  };

  console.log(watch("userId"));

  return (
    <form
      style={{ paddingLeft: "20px", marginTop: "15px" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label htmlFor="userId" type="email">
          아이디
        </label>
        <br />
        <input
          style={{ border: "1px solid black" }}
          name="userId"
          type="email"
          {...register("userId", {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
      </div>
      <div>
        <label htmlFor="userPassword" type="password">
          비밀번호
        </label>
        <br />
        <input
          name="userPassword"
          type="password"
          style={{ border: "1px solid black" }}
          aria-invalid={
            !isDirty ? undefined : errors.password ? "true" : "false"
          }
          {...register("userPassword", {
            required: true,
          })}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button type="submit" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href={"/signup"}>
          <a>
            <Button type="primary">회원가입</Button>
          </a>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
