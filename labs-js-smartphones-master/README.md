![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | JS SMART PHONE

We have learned Object-oriented programming and how class and inheritance work in JavaScript. Now lets work with our smart phones, applying all of the concepts we have just learned.

## What should you do
```
Fork this repo
Clone this repo
Practice OOPs Features
```

## How To Submit
```
Upon completion, run the following commands:

git add .
git commit -m "ProGrad ID"
git push origin master

And finally, create a pull request so your ProGrad Mentor (PM) can review your work.
```

## Instructions
We must write the correct code in the script.js file. In this file you will find the following starter code:
```
class SmartPhone{

}

class AndroidPhone extends SmartPhone{

}

class IPhone extends SmartPhone{

}

class MobileCampus{

}
```

In this case, it says that SmartPhone class should receive 3 arguments(ram, batteryPower, price), so we have to write the correct code. Let's make the SmartPhone class receive 3 arguments:
```
class SmartPhone{
constructor(ram, batteryPower, price){}

}
```
AndroidPhone class should extend the SmartPhone and should receive 4 arguments(modelName, ram, batteryPower, price), so we have to write the correct code. Let's make the AndroidPhone class receive 4 arguments:

```
class AndroidPhone extends SmartPhone {
    constructor(modelName, ram, batteryPower, price) {}
    
    }
```
IPhone class should extend the SmartPhone and should receive 4 arguments(seriesName, ram, batteryPower, price), so we have to write the correct code. Let's make the IPhone class receive 4 arguments:
```
class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {}
    
    }
```
The final class is called MobileCampus which should receive 3 arguments(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles), so we have to write the correct code. Let's make the MobileCampus class receive 3 arguments:
```
class MobileCampus{
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles){}
    
    }
```

### Progression 1: SMART PHONE
Modify the SmartPhone class and add two methods to it: displayFeatures(), and remainingAmount(priceIHave).

**class**
- should receive three arguments ram, batteryPower, price.
- should receive ram as first argument.
- should receive batteryPower as second argument.
- should receive price as third argument.

**displayFeatures()**
- should be a method.
- should receive 0 arguments.
- should display the features of the smartphone as given below.
```
    return this.ram +'\n'+this.batteryPower+'\n'+this.price;
```

**remainingAmount(priceIHave)**
- should be a method.
- should have 1 arguments.
- the argument name should be mentioned as priceIHave
- should calculate the remaining amount the customer has.
```
 this.price = this.price - priceIHave;
```

### Progression 2:  ANDRIOD PHONE

AndroidPhone class should extend the SmartPhone class and add two methods to it: displayFeatures(), and remainingAmount(priceIHave).

**class**
- should receive four arguments modelName, ram, batteryPower, price.
- should receive modelName as first argument.
- should receive ram as second argument.
- should receive batteryPower as third argument.
- shoud receive price as the fourth argument
- ram, batteryPower and price should be invoked from SmartPhone class. To invoke the parent class constructor you should use **super** keyword.
```
  constructor(modelName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.modelName = modelName;
    }
```

**displayFeatures()**
- should be a method.
- should receive 0 arguments.
- should display the features of the smartphone as given below.
```
    return this.modelName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
```

**remainingAmount(priceIHave)**
- should be a method.
- should have 1 arguments.
- the argument name should be mentioned as priceIHave
- should calculate the remaining amount the customer has.
- if the calculated price is less than or equal to zero, return ```Customer has no more amount```.
- else return the remaining amount after buying the android phone.
```
return 'Customer has remaining Rs.'+this.price +' after buying the android phone';
```


### Progression 3:   IPHONE

IPhone class should extend the SmartPhone class and add two methods to it: displayFeatures(), and remainingAmount(priceIHave).

**class**
- should receive four arguments seriesName, ram, batteryPower, price.
- should receive seriesName as first argument.
- should receive ram as second argument.
- should receive batteryPower as third argument.
- shoud receive price as the fourth argument
- ram, batteryPower and price should be invoked from SmartPhone class. To invoke the parent class constructor you should use **super** keyword.
```
  constructor(seriesName, ram, batteryPower, price) {
        super(ram, batteryPower, price)
        this.seriesName = seriesName;
    }
```

**displayFeatures()**
- should be a method.
- should receive 0 arguments.
- should display the features of the smartphone as given below.
```
   return this.seriesName +'\n' + this.ram +'\n'+ this.batteryPower +'\n'+ this.price;
```

**remainingAmount(priceIHave)**
- should be a method.
- should have 1 arguments.
- the argument name should be mentioned as priceIHave.
- should calculate the remaining amount the customer has.
- if the calculated price is less than or equal to zero, return ```Customer has no more amount```.
- else return the remaining amount after buying the android phone.
```
return 'Customer has remaining Rs.'+this.price +' after buying the Iphone';
```
- else if the amount is less than the Iphone price, then return
```
return "Customer can't able to buy a phone due to insufficient amount";
```

### Progression 4:  MOBILE CAMPUS
Create a class called Mobile Campus and a method to it:  changeMobileAvailabilityNumber(count,type)

**class**
- should receive three arguments NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles.
- should have NoOfMobiles as first argument.
- should have NoOfAndroidMobiles as second argument.
- should have NoOfIPhoneMobiles as third argument.

**changeMobileAvailabilityNumber(count,type)**
- should be a method.
- should have 2 arguments.
- the first argument name should be count.
- the second argument name should be type.
- based on the type of mobile phone calculate the availability of Android Phone and IPhone and return the count.
```
     if(type === 'android'){
            this.NoOfAndroidMobiles = this.NoOfAndroidMobiles - count;
            return 'Available android mobiles are '+this.NoOfAndroidMobiles;

        }
        if(type === 'iphone'){
            this.NoOfIPhoneMobiles = this.NoOfIPhoneMobiles - count;
            return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
        }
```


Happy Coding ProGrads❤️

