import axios from "axios";
import { BACKEND_URL } from "../../config";
import { ChatRoom } from "../../../components/ChatRoom";

async function getRoomId(slug: string) {
  const response = await axios.get(`${BACKEND_URL}/room/${slug}`);
  return response.data;
}

export default async function Room({ params }: { params: { slug: string } }) {
  const roomId = await getRoomId(params.slug);
  return <ChatRoom id={roomId}></ChatRoom>;
}
