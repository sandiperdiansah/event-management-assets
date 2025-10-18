import jwt from "jsonwebtoken";
import ms from "ms";

interface ITokenPayload {
    id: string;
    role: string;
}

export const generateToken = (payload: ITokenPayload, secret: "access" | "refresh") =>
{
    return jwt.sign(payload, secret === "access"
        ? process.env.JWT_ACCESS_SECRET as ms.StringValue
        : process.env.JWT_REFRESH_SECRET as ms.StringValue,
    {
        expiresIn: secret === "access" ? "15m" : "7d",
    });
};

export const verifyToken = (token: string, secret: "access" | "refresh") =>
{
    try
    {
        return jwt.verify(token, secret === "access"
            ? process.env.JWT_ACCESS_SECRET as ms.StringValue
            : process.env.JWT_REFRESH_SECRET as ms.StringValue,
        );
    }
    catch
    {
        throw new Error("Invalid or expired token");
    }
};
