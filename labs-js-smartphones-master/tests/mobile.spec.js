describe('SmartPhone', () => {
  let smartPhone;
  const ram = '4GB';
  const batteryPower = '3800mAh';
  const price = 24000;

  beforeEach(() => {
    smartPhone = new SmartPhone(ram, batteryPower,price);
  });

  describe('class', () => {

    it('should receive 3 arguments (ram, batteryPower & price)', () => {
      expect(SmartPhone.length).toEqual(3);
    });
    
    it('should receive the ram property as its 1st argument', () => {
      expect(smartPhone.ram).toEqual(ram);
    });
    
    it('should receive the batteryPower property as its 2nd argument', () => {
      expect(smartPhone.batteryPower).toEqual(batteryPower);
    });

    it('should receive the price property as its 3rd argument', () => {
      expect(smartPhone.price).toEqual(price);
    });

  });

  describe('displayFeatures() method', () => {
    it('should be a function', () => {
      expect(typeof smartPhone.displayFeatures).toBe('function');
    });
    
    it('should receive 0 arguments', () => {
      expect(smartPhone.displayFeatures.length).toEqual(0);
    });
    
    it("should return the all features of the smart phone in next next lines (use '\\n' escape sequence for new line)", () => {
      expect(smartPhone.displayFeatures()).toEqual(ram+'\n'+batteryPower+'\n'+price);
    });
  });

  describe('remainingAmount() method', () => {
    it('should be a function', () => {
      expect(typeof smartPhone.remainingAmount).toBe('function');
    });
    
    it('should receive 1 argument (the amount you have)', () => {
      expect(smartPhone.remainingAmount.length).toEqual(1);
    });
    
    it('should find the remaining amount that you have after buying the smart phone', () => {
      smartPhone.remainingAmount(25500);
      expect(smartPhone.price).toEqual( 25500 -price);
    });
    
    it("shouldn't return anything", () => {
      expect(smartPhone.remainingAmount(25500)).toEqual(undefined);
    });
  });
});

describe('AndroidPhone', () => {
  let androidPhone;
  const modelName = 'OnePlus';
  const ram = '4GB';
  const batteryPower = '3800mAh';
  const price = 24000;

  beforeEach(() => {
    androidPhone = new AndroidPhone(modelName, ram, batteryPower, price);
  });

  it('should inherit from SmartPhone', () => {
    expect(androidPhone instanceof SmartPhone).toEqual(true);
  });

  describe('class', () => {
    it('should receive 4 arguments (modelName, ram, batteryPower & price)', () => {
      expect(AndroidPhone.length).toEqual(4);
    });
    
    it('should receive the modelname property as its 1st argument', () => {
      expect(androidPhone.modelName).toEqual(modelName);
    });
    
    it('should receive the ram property as its 2nd argument', () => {
      expect(androidPhone.ram).toEqual(ram);
    });
    
    it('should receive the batteryPower property as its 3rd argument', () => {
      expect(androidPhone.batteryPower).toEqual(batteryPower);
    });

    it('should receive the price property as its 4th argument', () => {
      expect(androidPhone.price).toEqual(price);
    });
  });

  describe('displayFeatures() method', () => {
    it('should be a function', () => {
      expect(typeof androidPhone.displayFeatures).toBe('function');
    });
    
    it('should receive 0 arguments', () => {
      expect(androidPhone.displayFeatures.length).toEqual(0);
    });
    
    it("should return the all features of the smart phone in next next lines (use '\\n' escape sequence for new line)", () => {
      expect(androidPhone.displayFeatures()).toEqual(modelName+'\n'+ram+'\n'+batteryPower+'\n'+price);
    });
  });

  describe('remainingAmount() method', () => {
    it('should be a function', () => {
      expect(typeof androidPhone.remainingAmount).toBe('function');
    });
    
    it('should receive 1 argument (the amount you have)', () => {
      expect(androidPhone.remainingAmount.length).toEqual(1);
    });
    
    it('should find the remaining amount that you have after buying the smart phone', () => {
      androidPhone.remainingAmount(25500);
      expect(androidPhone.price).toEqual(25500 - price);
    });

    it('should return "Customer has remaining Rs.AMOUNT after buying the android phone", if customer has more amount than actual price of the phone', () => {
      expect(androidPhone.remainingAmount(25500)).toEqual(`Customer has remaining Rs.${androidPhone.price} after buying the android phone`);
      expect(androidPhone.remainingAmount(25000)).toEqual(`Customer has remaining Rs.${androidPhone.price} after buying the android phone`);
    });
    
    it('should return "Customer has no more amount", if customer has equal amount as same as actual price of the phone', () => {
      expect(androidPhone.remainingAmount(24000)).toEqual('Customer has no more amount');
    });
  });

});

describe('IPhone', () => {
  let iphone;
  const seriesName = 'iPhone 11';
  const ram = '4GB';
  const batteryPower = '3800mAh';
  const price = 64000;

  beforeEach(() => {
    iphone = new IPhone(seriesName, ram, batteryPower, price);
  });

  it('should inherit from SmartPhone', () => {
    expect(iphone instanceof SmartPhone).toEqual(true);
  });

  describe('class', () => {
    it('should receive 4 arguments (seriesName, ram, batteryPower & price)', () => {
      expect(IPhone.length).toEqual(4);
    });
    
    it('should receive the seriesName property as its 1st argument', () => {
      expect(iphone.seriesName).toEqual(seriesName);
    });
    
    it('should receive the ram property as its 2nd argument', () => {
      expect(iphone.ram).toEqual(ram);
    });
    
    it('should receive the batteryPower property as its 3rd argument', () => {
      expect(iphone.batteryPower).toEqual(batteryPower);
    });

    it('should receive the price property as its 4th argument', () => {
      expect(iphone.price).toEqual(price);
    });
  });


  describe('displayFeatures() method', () => {
    it('should be a function', () => {
      expect(typeof iphone.displayFeatures).toBe('function');
    });
    
    it('should receive 0 arguments', () => {
      expect(iphone.displayFeatures.length).toEqual(0);
    });
    
    it("should return the all features of the smart phone in next next lines (use '\\n' escape sequence for new line)", () => {
      expect(iphone.displayFeatures()).toEqual(seriesName+'\n'+ram+'\n'+batteryPower+'\n'+price);
    });
  });

  describe('remainingAmount() method', () => {
    it('should be a function', () => {
      expect(typeof iphone.remainingAmount).toBe('function');
    });
    
    it('should receive 1 argument (the amount you have)', () => {
      expect(iphone.remainingAmount.length).toEqual(1);
    });
    
    it('should find the remaining amount that you have after buying the smart phone', () => {
      iphone.remainingAmount(65500);
      expect(iphone.price).toEqual(65500 - price );
    });

    it('should return "Customer has remaining Rs.AMOUNT after buying an iphone", if customer has more amount than actual price of the phone', () => {
      expect(iphone.remainingAmount(65500)).toEqual(`Customer has remaining Rs.${iphone.price} after buying an iphone`);
      expect(iphone.remainingAmount(65000)).toEqual(`Customer has remaining Rs.${iphone.price} after buying an iphone`);
    });
    
    it('should return "Customer has no more amount", if customer has equal amount as same as actual price of the phone', () => {
      expect(iphone.remainingAmount(64000)).toEqual('Customer has no more amount');
    });

    it('should return "Customer can\'t able to buy the phone", if customer has less amount than actual price of the phone', () => {
      expect(iphone.remainingAmount(24000)).toEqual("Customer can't able to buy a phone due to insufficient amount");
    });
  });
});

describe('MobileCampus', () => {
  let mobileCampus;
  let NoOfMobiles = 10000;
  let NoOfAndroidMobiles = 6500;
  let NoOfIPhoneMobiles = 3500;

  beforeEach(() => {
    mobileCampus = new MobileCampus(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles);
  });

  describe('class', () => {

    it('should receive 3 arguments (NoOfMobiles, NoOfAndroidMobiles & NoOfIPhoneMobiles)', () => {
      expect(MobileCampus.length).toEqual(3);
    });
    
    it('should receive the NoOfMobiles property as its 1st argument', () => {
      expect(mobileCampus.NoOfMobiles).toEqual(NoOfMobiles);
    });
    
    it('should receive the NoOfAndroidMobiles property as its 2nd argument', () => {
      expect(mobileCampus.NoOfAndroidMobiles).toEqual(NoOfAndroidMobiles);
    });

    it('should receive the NoOfIPhoneMobiles property as its 3rd argument', () => {
      expect(mobileCampus.NoOfIPhoneMobiles).toEqual(NoOfIPhoneMobiles);
    });

    

  });

  describe('changeMobileAvailabilityNumber() method', () => {
    it('should be a function', () => {
      expect(typeof mobileCampus.changeMobileAvailabilityNumber).toBe('function');
    });
    
    it('should receive 2 arguments', () => {
      expect(mobileCampus.changeMobileAvailabilityNumber.length).toEqual(2);
    });
    
    it('should find the remaining mobiles available', () => {
      let mobileType = 'android';
      mobileCampus.changeMobileAvailabilityNumber(500,mobileType);
      expect(mobileCampus.NoOfMobiles).toEqual(NoOfMobiles - 500 );
      if(mobileType === 'android'){
        expect(mobileCampus.NoOfAndroidMobiles).toEqual(NoOfAndroidMobiles - 500 );
      }
      if(mobileType === 'iphone'){
        expect(mobileCampus.NoOfIPhoneMobiles).toEqual(NoOfIPhoneMobiles - 500 );
      }
    });

    it('should return "Available android mobiles are COUNT" after buying some mobiles', ()=>{
      expect(mobileCampus.changeMobileAvailabilityNumber(500,'android')).toEqual(`Available android mobiles are ${mobileCampus.NoOfAndroidMobiles}`);
    });

    it('should return "Available iphone mobiles are COUNT" after buying some mobiles', ()=>{
      expect(mobileCampus.changeMobileAvailabilityNumber(500,'iphone')).toEqual(`Available iphone mobiles are ${mobileCampus.NoOfIPhoneMobiles}`);
    });

  });
});