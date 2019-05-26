package com.ttn.casestudy2.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;


/**
 * The persistent class for the admin database table.
 * 
 */
@Entity
@Table(name="admin")
@NamedQuery(name="Admin.findAll", query="SELECT a FROM Admin a")
public class Admin implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ADMIN_ID")
	private Long adminId;

	@Column(name = "EMAIL_ID")
	private String emailId;

	@Column(name = "GEN_DATE")
	private Timestamp genDate;

	@Column(name = "NAME")
	private String name;

	@Column(name = "STATUS")
	private String status;

	public Admin() {
	}

	public Long getAdminId() {
		return this.adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public String getEmailId() {
		return this.emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Timestamp getGenDate() {
		return this.genDate;
	}

	public void setGenDate(Timestamp genDate) {
		this.genDate = genDate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

}