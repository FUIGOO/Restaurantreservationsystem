package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.entity;
import com.example.demo.repo.repo;

@Service
public class serv {
	@Autowired
	private repo re;
	public entity addDetails (entity e) {
		return re.save(e);
	}
	public List<entity>getAllDetails1()
	{

	return re.findAll();
	}
//	public Optional<Admission> getAllDetails(String fname)
//	{
//
//	return re.findById(fname);
//	}
	
	public String changeDetails(entity e) {
		re.save(e);
		return "updated";
		}
	public void deleteDetails(String name)
		{
		re.deleteById(name);
		}
	public List<entity> getAllDetails() {
		// TODO Auto-generated method stub
		return null;
	}

}
