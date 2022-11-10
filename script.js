function enter() {
    var table = document.getElementById("myTable");
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var instance = document.getElementById("instance").value;
    var url = document.getElementById("url").value;

    row = table.insertRow(table.rows.length );
    row.id = table.rows.length;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var UID="created"+row.id+"id" 

    cell1.innerHTML = course;
    cell2.innerHTML = email;
    cell3.innerHTML = instance;
    cell4.setAttribute("id", UID);
    cell4.innerHTML ='<input id="'+UID+'" type="button" value="Instance Created" onclick="deleteRow(this, '+row.id+')" />';
    
    cell5.innerHTML = '<select id="names"> <option value="none" selected disabled hidden>Select Name</option> <option value="Anamika">Anamika</option> <option value="Lavanya">Lavanya</option> <option value="Ratima">Ratima</option> <option value="Sapta">Sapta</option> <option value="Srishti">Srishti</option></select>';
    cell6.innerHTML = url;

    console.log(table.rows.length, row.id, UID)
  }

  function upTo(para1, tagName) {
    tagName = tagName.toLowerCase();
  
    while (para1 && para1.parentNode) {
        para1 = para1.parentNode;
      if (para1.tagName && para1.tagName.toLowerCase() == tagName) {
        return para1;
      }
    }
    return null;
}    
  
function deleteRow(el, rid) {

    var Row = document.getElementById(rid);
    var Cells = Row.getElementsByTagName("td");
    
    var x = document.getElementById("names");
    var i = x.selectedIndex;
    console.log(rid);
    
    if(x.options[i].text == "Select Name"){
        alert("Select a name")
    }

    else{
        var table = document.getElementById("check");
        table.insertRow(table.rows.length)
    
        tab = table.insertRow(table.rows.length );
        tab.id = table.rows.length;
        var cell1 = tab.insertCell(0);
        var cell2 = tab.insertCell(1);
        var cell3 = tab.insertCell(2);
        var cell4 = tab.insertCell(3);
        var cell5 = tab.insertCell(4);

        cell1.innerHTML = Cells[0].innerText
        cell2.innerHTML = Cells[1].innerText
        cell3.innerHTML = Cells[2].innerText
        cell4.innerHTML = x.options[i].text
        cell5.innerHTML = Cells[5].innerText

        //Delete from table entry
        var row = upTo(el, 'tr')
        if (row) row.parentNode.removeChild(row);

        doc = {
            "_id" : "rid",
            "Course_name" : cell1.innerHTML,
            "Learners_email": cell2.innerHTML,
            "Instance": cell3.innerHTML,
            "createdby": cell4.innerHTML,
            "url" :  cell5.innerHTML
        }

        console.log(doc)

        function enter() {
    var table = document.getElementById("myTable");
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var instance = document.getElementById("instance").value;
    var url = document.getElementById("url").value;

    row = table.insertRow(table.rows.length );
    row.id = table.rows.length;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var UID="created"+row.id+"id" 

    cell1.innerHTML = course;
    cell2.innerHTML = email;
    cell3.innerHTML = instance;
    cell4.setAttribute("id", UID);
    cell4.innerHTML ='<input id="'+UID+'" type="button" value="Instance Created" onclick="deleteRow(this, '+row.id+')" />';
    
    cell5.innerHTML = '<select id="names"> <option value="none" selected disabled hidden>Select Name</option> <option value="Anamika">Anamika</option> <option value="Lavanya">Lavanya</option> <option value="Ratima">Ratima</option> <option value="Sapta">Sapta</option> <option value="Srishti">Srishti</option></select>';
    cell6.innerHTML = url;

    console.log(table.rows.length, row.id, UID)
  }

  function upTo(para1, tagName) {
    tagName = tagName.toLowerCase();
  
    while (para1 && para1.parentNode) {
        para1 = para1.parentNode;
      if (para1.tagName && para1.tagName.toLowerCase() == tagName) {
        return para1;
      }
    }
    return null;
}    
  
function deleteRow(el, rid) {

    var Row = document.getElementById(rid);
    var Cells = Row.getElementsByTagName("td");
    
    var x = document.getElementById("names");
    var i = x.selectedIndex;
    console.log(rid);
    
    if(x.options[i].text == "Select Name"){
        alert("Select a name")
    }

    else{
        var table = document.getElementById("check");
        table.insertRow(table.rows.length)
    
        tab = table.insertRow(table.rows.length );
        tab.id = table.rows.length;
        var cell1 = tab.insertCell(0);
        var cell2 = tab.insertCell(1);
        var cell3 = tab.insertCell(2);
        var cell4 = tab.insertCell(3);
        var cell5 = tab.insertCell(4);

        cell1.innerHTML = Cells[0].innerText
        cell2.innerHTML = Cells[1].innerText
        cell3.innerHTML = Cells[2].innerText
        cell4.innerHTML = x.options[i].text
        cell5.innerHTML = Cells[5].innerText

        //Delete from table entry
        var row = upTo(el, 'tr')
        if (row) row.parentNode.removeChild(row);

        doc = {
            "_id" : rid,
            "Course_name" : cell1.innerHTML,
            "Learners_email": cell2.innerHTML,
            "Instance": cell3.innerHTML,
            "createdby": cell4.innerHTML,
            "url" :  cell5.innerHTML
        }

        console.log(doc)

        
    }


  }




    }


  }


