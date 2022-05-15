class SmartPhone {
    constructor(ram, batteryPower, price) {
      this.ram = ram
      this.batteryPower = batteryPower
      this.price = price
    }
  
    displayFeatures() {
      return this.ram + "\n" + this.batteryPower + "\n" + this.price
    }
  
    remainingAmount(priceIHave) {
      this.price -= priceIHave
    }
  }
  
  //AndroidPhone
  class AndroidPhone extends SmartPhone {
    constructor(modelName, ram, batteryPower, price) {
      super(ram, batteryPower, price)
      this.modelName = modelName
    }
  
    displayFeatures() {
      return (
        this.modelName +
        "\n" +
        this.ram +
        "\n" +
        this.batteryPower +
        "\n" +
        this.price
      )
    }
  
    remainingAmount(priceIHave) {
      if (priceIHave <= 0 || priceIHave == this.price)
        return "Customer has no more amount"
      this.price = Math.abs(this.price - priceIHave)
      return (
        "Customer has remaining Rs." +
        this.price +
        " after buying the android phone"
      )
    }
  }
  
  //IPhone
  class IPhone extends SmartPhone {
    constructor(seriesName, ram, batteryPower, price) {
      super(ram, batteryPower, price)
      this.seriesName = seriesName
    }
  
    displayFeatures() {
      return (
        this.seriesName +
        "\n" +
        this.ram +
        "\n" +
        this.batteryPower +
        "\n" +
        this.price
      )
    }
  
    remainingAmount(priceIHave) {
      if (priceIHave < this.price) {
        return "Customer can't able to buy a phone due to insufficient amount"
      } else {
        this.price = Math.abs(this.price - priceIHave)
        if (this.price <= 0) {
          return "Customer has no more amount"
        } else {
          return (
            "Customer has remaining Rs." + this.price + " after buying an iphone"
          )
        }
      }
    }
  }
  
  //MobileCampus
  class MobileCampus {
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles) {
      this.NoOfMobiles = NoOfMobiles
      this.NoOfAndroidMobiles = NoOfAndroidMobiles
      this.NoOfIPhoneMobiles = NoOfIPhoneMobiles
    }
  
    changeMobileAvailabilityNumber(count, type) {
      if (type === "android") {
        this.NoOfAndroidMobiles -= count
        this.NoOfMobiles -= count
        return "Available android mobiles are " + this.NoOfAndroidMobiles
      }
      if (type === "iphone") {
        this.NoOfIPhoneMobiles -= count
        this.NoOfMobiles -= count
        return "Available iphone mobiles are " + this.NoOfIPhoneMobiles
      }
    }
  }