package com.zhihu.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zhihu.service.AddressService;


@Controller("addressController")
@RequestMapping(value = "/address/")
public class AddressController {
	
	@Autowired
	private AddressService addressService;
	
	@RequestMapping(value = "getAddressCount",method = RequestMethod.GET)
	@ResponseBody
	public int getAddressCount(HttpServletRequest request){
		int count =  addressService.getAddressCount();
		String id = request.getParameter("id");
		System.out.println(id);
		System.out.println(count);
		
		return count;
	}
	
}
