var $=jQuery;var wcPvPhoneErrorMap=["Invalid number","Invalid country code","Phone number too short","Phone number too long","Invalid number"];if($('.wc-pv-intl input').length==0){$('#billing_phone_field').addClass('wc-pv-phone wc-pv-intl')}
var wcPvPhoneIntl=$('.wc-pv-intl input').intlTelInput({initialCountry:$(`${wcPvJson.parentPage} #billing_country`).val(),utilsScript:wcPvJson.utilsScript});var wcPvphoneErrMsg="";function wcPvValidatePhone(input){const phone=input;let result=!1;if(phone.intlTelInput("isValidNumber")==!0){result=phone.intlTelInput("getNumber")}
else{let errorCode=phone.intlTelInput("getValidationError");wcPvphoneErrMsg=`Phone validation error: ${(wcPvPhoneErrorMap[errorCode] == undefined ? 'Internal Error': wcPvPhoneErrorMap[errorCode])}`}
return result}
$(`${wcPvJson.parentPage} #billing_country`).change(function(){wcPvPhoneIntl.intlTelInput("setCountry",$(this).val())});function wcPvValidateProcess(parentEl){let phoneNumber=wcPvValidatePhone(wcPvPhoneIntl);if($('.wc-pv-intl input').length==0)
return;if(phoneNumber!=!1){$(`${wcPvJson.parentPage} input#billing_phone`).val(phoneNumber);if($('#wc-ls-phone-valid-field').length==0){parentEl.append(`<input id="wc-ls-phone-valid-field" value="${phoneNumber}" type="hidden" name="${wcPvJson.phoneValidatorName}">`)}
$('#wc-ls-phone-valid-field-err-msg').remove()}
else{if($('#wc-ls-phone-valid-field-err-msg').length==0){parentEl.append(`<input id="wc-ls-phone-valid-field-err-msg" value="${wcPvphoneErrMsg}" type="hidden" name="${wcPvJson.phoneValidatorErrName}">`)}
$('#wc-ls-phone-valid-field').remove()}}
if(wcPvJson.currentPage=="checkout"){let wcPvCheckoutForm=$(`${wcPvJson.parentPage}`);wcPvCheckoutForm.on('checkout_place_order',function(){wcPvValidateProcess(wcPvCheckoutForm)})}
else if(wcPvJson.currentPage=="account"){let wcPvAccForm=$(`${wcPvJson.parentPage} form`);$(`${wcPvJson.parentPage}`).submit(function(){wcPvValidateProcess(wcPvAccForm)})};