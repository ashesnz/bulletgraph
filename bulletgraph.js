function tick( obj, w ) {
	var innerDiv = document.createElement('div');
	innerDiv.className = 'tick';
	innerDiv.style.width = w + "%";
	obj.appendChild( innerDiv );
    
	var innerDiv = document.createElement('div');
	innerDiv.className = 'tick-label';
	innerDiv.style.width = ( w * 2 ) + "%";
	innerDiv.innerHTML = w;
	obj.appendChild( innerDiv );
    
}

function ticks( obj, num ) {
	var step = 100 / num;
	for( var i=0;i<100;i=i+step ) {
		tick( obj, Math.round(i) );
	}
	tick( obj, 100 );
}

function range( obj, list ) {
	var index = list.length;
	while( index > 0 ) {
		var innerDiv = document.createElement('div');
		innerDiv.className = 'range range-' + index;
		innerDiv.style.width = list[index-1] + "%";
		obj.appendChild( innerDiv );
		
		index--;
	}
    
}

function measure( obj, num ) {
	var innerDiv = document.createElement('div');
	innerDiv.className = 'measure';
	innerDiv.style.width = num + "%";
	obj.appendChild( innerDiv );
}

function target( obj, num ) {
	var innerDiv = document.createElement('div');
	innerDiv.className = 'target';
	innerDiv.style.width = num + "%";
	obj.appendChild( innerDiv );
}


function bullet_graph( id, options ) {
    var obj = document.getElementById(id);
    obj.className = obj.className + " bulletgraph";

    if ( !(options.ticks == undefined) ) {
        ticks( obj, options.ticks );
    }
    if ( !(options.range == undefined) ) {
        range( obj, options.range );
    }
    if ( !(options.measure == undefined) ) {
        measure( obj, options.measure );
    }
    if ( !(options.target == undefined) ) {
        target( obj, options.target );
    }
}
