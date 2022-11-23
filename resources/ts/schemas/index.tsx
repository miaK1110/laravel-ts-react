import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
    name: yup
        .string()
        .max(50, "名前項目で入力できるのは50文字までです")
        .required("名前は入力必須です"),
    email: yup
        .string()
        .max(254, "メールアドレスで入力できるのは254文字までです")
        .email("メールアドレスの形式が正しくありません")
        .required("メールアドレスは入力必須です"),
    password: yup
        .string()
        .min(6, "パスワードは6文字以上入力してください")
        .matches(passwordRules, {
            message:
                "パスワードは小文字と大文字と数字それぞれ1文字以上を含んでください",
        })
        .required("パスワードは入力必須です"),
    confirmPassword: yup
        .string()
        .oneOf(
            [yup.ref("password"), null],
            "パスワードと確認用パスワードが一致しません"
        )
        .required("確認用パスワードは入力必須です"),
    checkAnimal: yup.boolean().required(),
    radioDogOrCat: yup
        .string()
        .oneOf(["dog", "cat"], "値が間違っています")
        .required("Required"),
    selectFruits: yup
        .string()
        .oneOf(["1", "2", "3", "4"], "選択してください")
        .required("Required"),

    // acceptedTos: yup
    //     .boolean()
    //     .oneOf([true], "Please accept the terms of service"),
});
