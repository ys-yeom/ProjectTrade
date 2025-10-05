package com.trade.ProjectTrade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TradeDTO {
    private int product_id;
    private int member_id;
    private String name;
    private String price;
    private int category_id;
    private String description;
    private String image;
    private java.sql.Date create_date;
    private Date modify_date;
}