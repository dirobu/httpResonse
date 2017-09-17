function httpResponse(data, url, action)
{
	var response;
	var xhttp;
		xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function()
		{
			if(this.readyState == 4)
			{
				if(this.status == 200)
				{
					response = this.responseText;
				}
				else if(this.readyState == 4 && this.status !==200)
				{
					response = "Connection Error";
				}
				if(Object.prototype.toString.call(action) == '[object Function]')
				{
					action(response);
				}
				else if(document.getElementById(action))
				{
					document.getElementById(action).innerHTML = response;
				}
				else
				{
					console.log(response);
				}

			}
		};
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		if(document.getElementById(data) !== null)
		{
			var str = "";
			var elm = document.getElementById(data);
			for(f = 0; f < elm.childNodes.length; f++)
			{
				str+= elm.childNodes[f].id+'=';
				if(elm.childNodes[f].nodeName == "SELECT")
				{
					str+= elm.childNodes[f][elm.childNodes[f].selectedIndex].text;
				}
				if(elm.childNodes[f].nodeName == "INPUT" || elm.childNodes[f].nodeName == "TEXTAREA")
				{
					str+= elm.childNodes[f].value;
				}
				str+= "&";
			}
			if(str.substr(str.length - 1) == "&")
			{
				str = str.slice(0, -1);
			}
			data = str;
		}
		else if(data !== null && typeof data === 'object')
		{
			var str = "";
			for(var key in data)
			{
				str+= key+"="+data[key]+"&";
			}
			if(str.substr(str.length - 1) == "&")
			{
				str = str.slice(0, -1);
			}
			data = str;
		}
		xhttp.send(data);
}
