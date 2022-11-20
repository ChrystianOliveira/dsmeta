package com.devsupeior.dsmeta.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsupeior.dsmeta.entities.Sale;
import com.devsupeior.dsmeta.services.SaleService;
import com.devsupeior.dsmeta.services.SmsService;

@RestController
@RequestMapping(value="/sales")
public class SaleResource {

	@Autowired
	private SaleService saleService;
	@Autowired
	private SmsService smsService;
	
	@GetMapping(path="/{id}")
	public Optional<Sale> findSaleById(@PathVariable Long id){
		return saleService.findSaleById(id);
	}
	
	@GetMapping(path="/all")
	public List<Sale> findSalesAll(){
		return saleService.findSalesAll();
	}
	
	@GetMapping
	public Page<Sale> findSales(
			@RequestParam(value="minDate",defaultValue = "") String minDate, 
			@RequestParam(value="maxDate",defaultValue = "") String maxDate, 
			Pageable pageable){
		return saleService.findSales(minDate, maxDate, pageable);
	}
	
	@GetMapping(path="/{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
	
}
