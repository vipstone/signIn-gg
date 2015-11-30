function setUserInfo(data) {
	plus.storage.setItem("id", data.id);
	plus.storage.setItem("name", data.name);
	plus.storage.setItem("phone", data.phone);
	plus.storage.setItem("job", data.job);
	plus.storage.setItem("createTime", data.createTime);
}


function getUserInfo()
{
	var userinfo = {};
	userinfo.id = plus.storage.getItem("id");
	userinfo.name = plus.storage.getItem("name");
	userinfo.phone = plus.storage.getItem("phone");
	userinfo.job = plus.storage.getItem("job");
	userinfo.createTime = plus.storage.getItem("createTime");
	return userinfo;
}
