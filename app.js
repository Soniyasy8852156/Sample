var h1Data=React.createElement("h1",{
    id:"heading",name:"ourAttr"
},"this is from react");
console.log(h1Data);
    var root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(h1Data)


{/* <div id="parent">
    <div id="child1">
        <h1>h1 data</h1>
        <h2>h2 data</h2>
    </div>
    <div id="child2">
        <h1>h1 data</h1>
        <h2>h2 data</h2>
    </div>
</div>

*/}


// var data=React.createElement("div",{id:"parent"},
//    [ React.createElement("div",{id:"child1"},
//     [React.createElement("h1",{},"h1 data"),React.createElement("h2",{},"h2 data")]), React.createElement("div",{id:"child2"},
//         [React.createElement("h1",{},"h1 data"),React.createElement("h2",{},"h2 data")])])
//         console.log(data)


    // var root=ReactDOM.createRoot(document.getElementById("root1"));
    // root.render(data)