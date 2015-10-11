package com.zhihu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zhihu.dao.AddressDao;
import com.zhihu.service.AddressService;


@Service("addressService")
public class AddressServiceImpl implements AddressService {
	
	@Autowired
	private AddressDao addressDao;
	
	public int getAddressCount() {
		return addressDao.getAddressCount();
	}

}
