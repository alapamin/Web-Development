$(document).ready(


    function(){
        $('#add').click(function(){
            var toAdd = $('#task').val();
            if(toAdd !== ''){
                $('ul').append(  '<li>'  + toAdd +   '</li>'  );
                $('#task').val('');
            }
        }); 

        $(document).on('click','li',function(){
            $(this).toggleClass('cross');
        });

        $(document).on('dblclick','li',function(){
            $(this).remove();
        });

    }


);

/*
var addButton = document.getElementById("add");
var input = document.getElementById("task");
var toDoList = document.getElementById('to-do');

addButton.addEventListener("click", addItem);

function addItem(){
    //li element
    if(input.value !== ""){ //prevents from creation of ugly blank spaces
        var listt = document.createElement("li");
        //put the input as the text of the element
        listt.innerHTML = input.value;
        //add li to the list
        toDoList.appendChild(listt);
    
        listt.addEventListener("click",function(){
            listt.classList.toggle("cross")
        });
    
        listt.addEventListener("dblclick",function(){
            this.remove();
        });
    }
    

    input.value = "";
}
*/
