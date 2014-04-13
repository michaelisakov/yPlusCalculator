function yCalc(Uinf, rho, L, mu, n, yPlus) {
	
	this.Uinf  = Uinf;
	this.rho   = rho;
	this.L     = L;
	this.mu    = mu;
	this.yPlus = yPlus;
	this.n     = n;

	this.reynoldsNumber = function() { 
		var Re = (this.Uinf*this.rho*this.L)/(this.mu);
		return Re;
	}

	this.skinFriction = function() { 
	var Re = this.reynoldsNumber();
	var Cf = Math.pow(((2*log10(Re))-(0.65)),(-2.3));
	return Cf;

	function log10(val) {
		  return Math.log(val) / Math.LN10;
		}
	}

	this.wallShearStress = function() { 
		var Cf = this.skinFriction();
		var Tw = Cf*0.5*this.rho*this.Uinf*this.Uinf;
		return Tw;
	}

	this.frictionVelocity = function() { 
		var Tw    = this.wallShearStress(); 
		var uStar = Math.sqrt(Tw/this.rho); 
		return uStar;
	}

	this.wallDistance = function(yPlus) { 
		var whyPlus;
		if(!yPlus || yPlus == '')
			whyPlus = this.yPlus;
		else
			whyPlus = yPlus
		var uStar = this.frictionVelocity();
		var y = (whyPlus*this.mu)/(this.rho*uStar);
		return y;
	}

	this.wallDistanceData = function(n) { 
		n = n || this.n; 
		var yPlusArray      = [];
		yPlusArray.length   = n;
		var wallArray       = [];
		wallArray.length    = n;
		var resultsArray    = [];
		resultsArray.length = n;
		for(var i = 1; i < n; i++) {
			var yTemp         = i;
			yPlusArray[i-1]   = yTemp; 
			wallArray[i-1]    = this.wallDistance(yTemp);
			resultsArray[i-1] = [yPlusArray[i-1], wallArray[i-1]]
		}
		return resultsArray;	
	}

}