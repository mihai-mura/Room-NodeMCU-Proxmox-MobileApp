console.log(`Conected to ${process.env.API}`);
const ws = new WebSocket(`wss://${process.env.API}`);

export default ws;
