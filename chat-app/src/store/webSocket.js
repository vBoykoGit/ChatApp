import { websocketURL } from '../helpers/config';

class SocketProvider {
    constructor() {
        if (!SocketProvider.instance) {
            this.socket = null
            SocketProvider.instance = this;
        }
        return SocketProvider.instance;
    }

    connect = () => {
        this.socket = new WebSocket(websocketURL)
    }
}

const socketProvider = new SocketProvider()
export default socketProvider