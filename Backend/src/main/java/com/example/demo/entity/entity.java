package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
		@Table(name = "res")
public class entity {
	@Id
	private String name;
	private String email;
	private int date;
	private int time;
	private int num;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getDate() {
		return date;
	}
	public void setDate(int date) {
		this.date = date;
	}
	public int getTime() {
		return time;
	}
	public void setTime(int time) {
		this.time = time;
	}
	public int getNum() {
		return num;
	}
	public void setNum(int num) {
		this.num = num;
	}
	public entity(String name, String email, int date, int time, int num) {
		super();
		this.name = name;
		this.email = email;
		this.date = date;
		this.time = time;
		this.num = num;
	}
	public entity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
		
	}
	   



