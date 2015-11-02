package com.zhihu.pojo;

public class FeedSource {
	private String type;//来源类型
	private String avatarPicture;
	private String sourceUrl;
	
	public String getSourceUrl() {
		return sourceUrl;
	}
	public void setSourceUrl(String sourceUrl) {
		this.sourceUrl = sourceUrl;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getAvatarPicture() {
		return avatarPicture;
	}
	public void setAvatarPicture(String avatarPicture) {
		this.avatarPicture = avatarPicture;
	}
	
}
