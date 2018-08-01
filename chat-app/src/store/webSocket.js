class SocketProvider {
    constructor() {
        if (!SocketProvider.instance) {
            this.socket = null
            SocketProvider.instance = this;
        }
        return SocketProvider.instance;
    }

    connect = () => {
        this.socket = new WebSocket('ws://localhost:3001')
    }
}

const socketProvider = new SocketProvider()
export default socketProvider