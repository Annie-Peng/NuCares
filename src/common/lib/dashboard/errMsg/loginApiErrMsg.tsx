interface LoginApiErrMsgStatusCode {
  [statusCode: number]: Record<string, string>;
}

export interface LoginApiErrMsgProps {
  [key: string]: LoginApiErrMsgStatusCode;
}

const loginApiErrMsg: LoginApiErrMsgProps = {
  Email: {
    400: {
      Email必填: "*必填",
      Email格式錯誤: "Email格式有誤",
    },
  },
  Password: {
    400: {
      密碼必填: "*必填",
      "密碼必須為6-12位英文字母和數字的組合": "密碼格式有誤",
    },
  },
};
export default loginApiErrMsg;
