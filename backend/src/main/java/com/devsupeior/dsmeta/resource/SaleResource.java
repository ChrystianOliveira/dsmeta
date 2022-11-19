package com.devsupeior.dsmeta.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsupeior.dsmeta.entities.Sale;
import com.devsupeior.dsmeta.services.SaleService;

@RestController
@RequestMapping(value="/sales")
public class SaleResource {

	@Autowired
	private SaleService saleService;
	
	@GetMapping
	public List<Sale> findSales(){
		return saleService.findSales();
	}
	
}
