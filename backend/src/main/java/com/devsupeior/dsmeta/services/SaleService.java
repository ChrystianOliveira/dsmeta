package com.devsupeior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsupeior.dsmeta.entities.Sale;
import com.devsupeior.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository saleRepository;

	public List<Sale> findSales(){
		return saleRepository.findAll();
	}
	
	
}