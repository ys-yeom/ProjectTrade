package com.trade.ProjectTrade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MyPageDTO {
    private int store_id;
    private int member_id;
    private String member_name;
    private String image;
    private Date create_date;
    private Date modify_date;
}