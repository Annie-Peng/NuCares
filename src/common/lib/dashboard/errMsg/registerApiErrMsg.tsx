interface RegisterApiErrMsgStatusCode {
  [statusCode: number]: Record<string, string>;
}

export interface RegisterApiErrMsgProps {
  [key: string]: RegisterApiErrMsgStatusCode;
}

const registerApiErrMsg: RegisterApiErrMsgProps = {
  Email: {
    400: {
      Email必填: "*必填",
      Email格式錯誤: "Email格式有誤",
      Email重複: "此用戶已存在",
    },
  },
  Password: {
    400: {
      密碼必填: "*必填",
      "密碼必須為6-12位英文字母和數字的組合": "密碼格式有誤",
      密碼不相同: "您輸入的密碼不一致",
    },
  },
  RePassword: {
    400: {
      密碼確認必填: "*必填",
    },
  },
  Phone: {
    400: {
      手機號碼格式錯誤: "手機號碼格式有誤",
    },
  },
};
export default registerApiErrMsg;
