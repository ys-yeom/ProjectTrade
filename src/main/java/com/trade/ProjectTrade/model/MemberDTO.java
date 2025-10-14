package com.trade.ProjectTrade.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
    private int member_id;
    private String password;
    private String member_name;
    private String email;
    private String mobile;
    private String address;
    private String profile_image;
}

