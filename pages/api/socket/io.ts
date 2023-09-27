import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";
import { NextApiResponseServerIo } from "../../../types";

export const config = {
  api: {
    bodyParser: false,
  },
};

export type Point = { x: number; y: number };
export type drawing = {
  prevPoint: Point | null;
  currentPoint: Point;
  color: string;
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
  const path = "/api/socket/io";
  const httpServer: NetServer = res.socket.server as any;
  const io = new ServerIO(httpServer, {
    path: path,
    // @ts-ignore
    addTrailingSlash: false,
    cors: {
      origin: "*",
    },
  });
  res.socket.server.io = io;
  io.on("connection", (socket: any) => {
    console.log("connnected");
    socket.on("draw-line", ({ prevPoint, currentPoint, color }: drawing) => {
      socket.broadcast.emit("draw-line", { prevPoint, currentPoint, color });
    });
    socket.on("clear", () => {
      io.emit("clear");
    });
  });

  res.end();
};

export default ioHandler;
