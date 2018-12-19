export interface Reserva{
    code : string, 
    planId : string, 
    planName : string, 
    planDetail :  {
        numberOfDays: number,
        adultRate: number,
        childRate: number,
        currency: string
        },
        
    grandTotal : number, 
    visitor : {
        reference : undefined,
        document : string,
        documentType : {
            culture : undefined, 
            code : string, 
            name : undefined, 
            pattern : undefined, 
            isAlphanmeric : boolean
        }, 
        type: string,
        firstName: string,
        lastName: string,
        email: string,
        birthDate: string,
        age: number ,
        phoneNumber: undefined,
        gender: string, 
        loyaltyPrograms: [],    
        passports: [],
        tickets: [],
        fares: [],
        emergencyContactName: undefined,
        emergencyContactNumber: undefined,
        policyCompliance: undefined,
        nationality: undefined,
        country: undefined

    },  
    productStatus : string, 
    imageSet : string, 
    adultsTotalAmount : number , 
    childrenTotalAmount : number, 
    chargedPoint: number, 
    chargedAmount : number,
    confirmationCode : undefined,
    bookingDate: string,
    providerTicketStatus : undefined,
    userDefineData : {
        remark: string,
        name: string,
        value: number
    },
    coupon : undefined

}