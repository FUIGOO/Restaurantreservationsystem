package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.entity;
import com.example.demo.service.serv;

@RestController
public class restcont {
	@Autowired
	private serv ser;
	@PostMapping("/add")
	public entity postDetails(@RequestBody entity e) {
		return ser.addDetails(e);
	}
	
	@GetMapping ("/get")
	public List<entity>getDetails()
	{
		return ser.getAllDetails();
	}
//	@GetMapping ("/get/{fname}")
//	public Optional<Admission> getDetails(@PathVariable String fname)
//	{
//		return ser.getAllDetails(fname);
//	}
	@PutMapping("/put/{name}")
	public String putDetails(@RequestBody entity e ) {
		return ser.changeDetails(e);
	}
	
	@DeleteMapping("/del/{name}")
	public void deletedetails(@PathVariable("name") String name)
	{
		ser.deleteDetails(name);
	}

}
