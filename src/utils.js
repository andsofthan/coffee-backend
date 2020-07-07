import "./passport";
import nodemailder from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const sendMail = (email) => {
    const options = {
        auth: {
            api_user: process.env.SENDGRID_USERNAME,
            api_key: process.env.SENDGRID_PASSWORD
          }
    };
    const client = nodemailder.createTransport(sgTransport(options));
    return client.sendMail(email);
};

export const sendUserMail = (toAdress, name, mail, addr, phone) => {
    const email = {
        from : "chichibi365@gmail.com",
        to : toAdress,
        subject: "가입 의뢰입니다.",
        html:
        `
            <div>
                <h1>'커피파는 아저씨' 신규 가입의뢰서</h1>
                <p> 이름   : ${name} </p>
                <p> 이메일 : ${mail} </p>
                <p> 주소    : ${addr} </p>
                <p> 전화번호 :  ${phone} </p>
            </div>
        `
    };
    return sendMail(email);
};