const modal = wmodal( {
    title: "Go to main page",
    closable: true,
    content: `
    <div class="input_layout">        
        <input type="e-mail" id= "email" placeholder="Write your e-mail">  
        <input type="password" id = "password" placeholder= "Write a password"> 
    </div> 
    `, 
    width: '300px',
    footerButtons: [
        {text:'continue', type: 'primary', handler () {
            console.log ("primary is clicked")
        }},
        {text:'cancel', type: 'danger', handler () {
            console.log ("danger is clicked")
        }},
    ]
        
})