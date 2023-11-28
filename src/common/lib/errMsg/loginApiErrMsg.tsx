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
      信箱不存在: "此用戶不存在",
    },
  },
  Password: {
    400: {
      密碼必填: "*必填",
      密碼錯誤: "密碼格式有誤 (6-12字元英數組合)",
    },
  },
};
export default loginApiErrMsg;
