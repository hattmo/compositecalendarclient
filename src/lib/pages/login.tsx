import React from "react";
const clientId = "1080184656423-2ue1gt1t85mhe98mac7nqipqhl2c55d4.apps.googleusercontent.com";
const redirectUri = "http://compositecalendar.hattmo.com/auth";
const scope = "https://www.googleapis.com/auth/calendar%20https://www.googleapis.com/auth/drive.appdata%20https://www.googleapis.com/auth/drive.file";
const googleUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;
interface IProps {
    message: string;
}

export default ({ message }: IProps) => {
    return (
        <div>
            <h1>
                Login
            </h1 >
            <button onClick={() => { location.href = googleUri; }}>Login</button>
            {message}
        </div >
    );
};
