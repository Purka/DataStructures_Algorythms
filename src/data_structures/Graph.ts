class MGraph {
    public numberOfNodes: number;
    public adjacentList: any;
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node: string) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1: string, node2: string) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) return undefined;

        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}