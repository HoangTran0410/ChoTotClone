import requests
import pickle
import os.path
import inspect
import time
import threading

from elasticsearch import Elasticsearch
from elasticsearch import helpers
from threading import Thread
from datetime import datetime


#es = Elasticsearch()
es = Elasticsearch(
	["https://elastic:XjKCchgn5U1YgpSmwMPgsyn2@6b6a977c899b40ea9ac0cbe4c2e46b45.ap-southeast-1.aws.found.io:9243"
	],
	use_ssl=True,verify_certs=True
	)
current_path =  os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe()))) 
LIMIT = 50
def compound_unicode(unicode_str):
	unicode_str = unicode_str.replace("\u0065\u0309", "\u1EBB")    # ẻ
	unicode_str = unicode_str.replace("\u0065\u0301", "\u00E9")    # é
	unicode_str = unicode_str.replace("\u0065\u0300", "\u00E8")    # è
	unicode_str = unicode_str.replace("\u0065\u0323", "\u1EB9")    # ẹ
	unicode_str = unicode_str.replace("\u0065\u0303", "\u1EBD")    # ẽ
	unicode_str = unicode_str.replace("\u00EA\u0309", "\u1EC3")    # ể
	unicode_str = unicode_str.replace("\u00EA\u0301", "\u1EBF")    # ế
	unicode_str = unicode_str.replace("\u00EA\u0300", "\u1EC1")    # ề
	unicode_str = unicode_str.replace("\u00EA\u0323", "\u1EC7")    # ệ
	unicode_str = unicode_str.replace("\u00EA\u0303", "\u1EC5")    # ễ
	unicode_str = unicode_str.replace("\u0079\u0309", "\u1EF7")    # ỷ
	unicode_str = unicode_str.replace("\u0079\u0301", "\u00FD")    # ý
	unicode_str = unicode_str.replace("\u0079\u0300", "\u1EF3")    # ỳ
	unicode_str = unicode_str.replace("\u0079\u0323", "\u1EF5")    # ỵ
	unicode_str = unicode_str.replace("\u0079\u0303", "\u1EF9")    # ỹ
	unicode_str = unicode_str.replace("\u0075\u0309", "\u1EE7")    # ủ
	unicode_str = unicode_str.replace("\u0075\u0301", "\u00FA")    # ú
	unicode_str = unicode_str.replace("\u0075\u0300", "\u00F9")    # ù
	unicode_str = unicode_str.replace("\u0075\u0323", "\u1EE5")    # ụ
	unicode_str = unicode_str.replace("\u0075\u0303", "\u0169")    # ũ
	unicode_str = unicode_str.replace("\u01B0\u0309", "\u1EED")    # ử
	unicode_str = unicode_str.replace("\u01B0\u0301", "\u1EE9")    # ứ
	unicode_str = unicode_str.replace("\u01B0\u0300", "\u1EEB")    # ừ
	unicode_str = unicode_str.replace("\u01B0\u0323", "\u1EF1")    # ự
	unicode_str = unicode_str.replace("\u01B0\u0303", "\u1EEF")    # ữ
	unicode_str = unicode_str.replace("\u0069\u0309", "\u1EC9")    # ỉ
	unicode_str = unicode_str.replace("\u0069\u0301", "\u00ED")    # í
	unicode_str = unicode_str.replace("\u0069\u0300", "\u00EC")    # ì
	unicode_str = unicode_str.replace("\u0069\u0323", "\u1ECB")    # ị
	unicode_str = unicode_str.replace("\u0069\u0303", "\u0129")    # ĩ
	unicode_str = unicode_str.replace("\u006F\u0309", "\u1ECF")    # ỏ
	unicode_str = unicode_str.replace("\u006F\u0301", "\u00F3")    # ó
	unicode_str = unicode_str.replace("\u006F\u0300", "\u00F2")    # ò
	unicode_str = unicode_str.replace("\u006F\u0323", "\u1ECD")    # ọ
	unicode_str = unicode_str.replace("\u006F\u0303", "\u00F5")    # õ
	unicode_str = unicode_str.replace("\u01A1\u0309", "\u1EDF")    # ở
	unicode_str = unicode_str.replace("\u01A1\u0301", "\u1EDB")    # ớ
	unicode_str = unicode_str.replace("\u01A1\u0300", "\u1EDD")    # ờ
	unicode_str = unicode_str.replace("\u01A1\u0323", "\u1EE3")    # ợ
	unicode_str = unicode_str.replace("\u01A1\u0303", "\u1EE1")    # ỡ
	unicode_str = unicode_str.replace("\u00F4\u0309", "\u1ED5")    # ổ
	unicode_str = unicode_str.replace("\u00F4\u0301", "\u1ED1")    # ố
	unicode_str = unicode_str.replace("\u00F4\u0300", "\u1ED3")    # ồ
	unicode_str = unicode_str.replace("\u00F4\u0323", "\u1ED9")    # ộ
	unicode_str = unicode_str.replace("\u00F4\u0303", "\u1ED7")    # ỗ
	unicode_str = unicode_str.replace("\u0061\u0309", "\u1EA3")    # ả
	unicode_str = unicode_str.replace("\u0061\u0301", "\u00E1")    # á
	unicode_str = unicode_str.replace("\u0061\u0300", "\u00E0")    # à
	unicode_str = unicode_str.replace("\u0061\u0323", "\u1EA1")    # ạ
	unicode_str = unicode_str.replace("\u0061\u0303", "\u00E3")    # ã
	unicode_str = unicode_str.replace("\u0103\u0309", "\u1EB3")    # ẳ
	unicode_str = unicode_str.replace("\u0103\u0301", "\u1EAF")    # ắ
	unicode_str = unicode_str.replace("\u0103\u0300", "\u1EB1")    # ằ
	unicode_str = unicode_str.replace("\u0103\u0323", "\u1EB7")    # ặ
	unicode_str = unicode_str.replace("\u0103\u0303", "\u1EB5")    # ẵ
	unicode_str = unicode_str.replace("\u00E2\u0309", "\u1EA9")    # ẩ
	unicode_str = unicode_str.replace("\u00E2\u0301", "\u1EA5")    # ấ
	unicode_str = unicode_str.replace("\u00E2\u0300", "\u1EA7")    # ầ
	unicode_str = unicode_str.replace("\u00E2\u0323", "\u1EAD")    # ậ
	unicode_str = unicode_str.replace("\u00E2\u0303", "\u1EAB")    # ẫ
	unicode_str = unicode_str.replace("\u0045\u0309", "\u1EBA")    # Ẻ
	unicode_str = unicode_str.replace("\u0045\u0301", "\u00C9")    # É
	unicode_str = unicode_str.replace("\u0045\u0300", "\u00C8")    # È
	unicode_str = unicode_str.replace("\u0045\u0323", "\u1EB8")    # Ẹ
	unicode_str = unicode_str.replace("\u0045\u0303", "\u1EBC")    # Ẽ
	unicode_str = unicode_str.replace("\u00CA\u0309", "\u1EC2")    # Ể
	unicode_str = unicode_str.replace("\u00CA\u0301", "\u1EBE")    # Ế
	unicode_str = unicode_str.replace("\u00CA\u0300", "\u1EC0")    # Ề
	unicode_str = unicode_str.replace("\u00CA\u0323", "\u1EC6")    # Ệ
	unicode_str = unicode_str.replace("\u00CA\u0303", "\u1EC4")    # Ễ
	unicode_str = unicode_str.replace("\u0059\u0309", "\u1EF6")    # Ỷ
	unicode_str = unicode_str.replace("\u0059\u0301", "\u00DD")    # Ý
	unicode_str = unicode_str.replace("\u0059\u0300", "\u1EF2")    # Ỳ
	unicode_str = unicode_str.replace("\u0059\u0323", "\u1EF4")    # Ỵ
	unicode_str = unicode_str.replace("\u0059\u0303", "\u1EF8")    # Ỹ
	unicode_str = unicode_str.replace("\u0055\u0309", "\u1EE6")    # Ủ
	unicode_str = unicode_str.replace("\u0055\u0301", "\u00DA")    # Ú
	unicode_str = unicode_str.replace("\u0055\u0300", "\u00D9")    # Ù
	unicode_str = unicode_str.replace("\u0055\u0323", "\u1EE4")    # Ụ
	unicode_str = unicode_str.replace("\u0055\u0303", "\u0168")    # Ũ
	unicode_str = unicode_str.replace("\u01AF\u0309", "\u1EEC")    # Ử
	unicode_str = unicode_str.replace("\u01AF\u0301", "\u1EE8")    # Ứ
	unicode_str = unicode_str.replace("\u01AF\u0300", "\u1EEA")    # Ừ
	unicode_str = unicode_str.replace("\u01AF\u0323", "\u1EF0")    # Ự
	unicode_str = unicode_str.replace("\u01AF\u0303", "\u1EEE")    # Ữ
	unicode_str = unicode_str.replace("\u0049\u0309", "\u1EC8")    # Ỉ
	unicode_str = unicode_str.replace("\u0049\u0301", "\u00CD")    # Í
	unicode_str = unicode_str.replace("\u0049\u0300", "\u00CC")    # Ì
	unicode_str = unicode_str.replace("\u0049\u0323", "\u1ECA")    # Ị
	unicode_str = unicode_str.replace("\u0049\u0303", "\u0128")    # Ĩ
	unicode_str = unicode_str.replace("\u004F\u0309", "\u1ECE")    # Ỏ
	unicode_str = unicode_str.replace("\u004F\u0301", "\u00D3")    # Ó
	unicode_str = unicode_str.replace("\u004F\u0300", "\u00D2")    # Ò
	unicode_str = unicode_str.replace("\u004F\u0323", "\u1ECC")    # Ọ
	unicode_str = unicode_str.replace("\u004F\u0303", "\u00D5")    # Õ
	unicode_str = unicode_str.replace("\u01A0\u0309", "\u1EDE")    # Ở
	unicode_str = unicode_str.replace("\u01A0\u0301", "\u1EDA")    # Ớ
	unicode_str = unicode_str.replace("\u01A0\u0300", "\u1EDC")    # Ờ
	unicode_str = unicode_str.replace("\u01A0\u0323", "\u1EE2")    # Ợ
	unicode_str = unicode_str.replace("\u01A0\u0303", "\u1EE0")    # Ỡ
	unicode_str = unicode_str.replace("\u00D4\u0309", "\u1ED4")    # Ổ
	unicode_str = unicode_str.replace("\u00D4\u0301", "\u1ED0")    # Ố
	unicode_str = unicode_str.replace("\u00D4\u0300", "\u1ED2")    # Ồ
	unicode_str = unicode_str.replace("\u00D4\u0323", "\u1ED8")    # Ộ
	unicode_str = unicode_str.replace("\u00D4\u0303", "\u1ED6")    # Ỗ
	unicode_str = unicode_str.replace("\u0041\u0309", "\u1EA2")    # Ả
	unicode_str = unicode_str.replace("\u0041\u0301", "\u00C1")    # Á
	unicode_str = unicode_str.replace("\u0041\u0300", "\u00C0")    # À
	unicode_str = unicode_str.replace("\u0041\u0323", "\u1EA0")    # Ạ
	unicode_str = unicode_str.replace("\u0041\u0303", "\u00C3")    # Ã
	unicode_str = unicode_str.replace("\u0102\u0309", "\u1EB2")    # Ẳ
	unicode_str = unicode_str.replace("\u0102\u0301", "\u1EAE")    # Ắ
	unicode_str = unicode_str.replace("\u0102\u0300", "\u1EB0")    # Ằ
	unicode_str = unicode_str.replace("\u0102\u0323", "\u1EB6")    # Ặ
	unicode_str = unicode_str.replace("\u0102\u0303", "\u1EB4")    # Ẵ
	unicode_str = unicode_str.replace("\u00C2\u0309", "\u1EA8")    # Ẩ
	unicode_str = unicode_str.replace("\u00C2\u0301", "\u1EA4")    # Ấ
	unicode_str = unicode_str.replace("\u00C2\u0300", "\u1EA6")    # Ầ
	unicode_str = unicode_str.replace("\u00C2\u0323", "\u1EAC")    # Ậ
	unicode_str = unicode_str.replace("\u00C2\u0303", "\u1EAA")    # Ẫ
	return unicode_str


class Thread_limit():
	nThreadTagme = 0
	def __init__(self, MaxThread=35):
		self.MaxThread = MaxThread
	def run(self, func_, arg):
		
		while self.nThreadTagme > self.MaxThread:
			time.sleep(0.05)
		self.nThreadTagme+=1
		func_(arg)
		#print("Finish", arg)
		if (arg[0]%10==0):
			print("Finish", arg[0])
		self.nThreadTagme-=1
	def Stack(self):
		while self.nThreadTagme > self.MaxThread:
			time.sleep(0.1)
	def whilefinish(self):
		while 1:
			if self.nThreadTagme==0:
				break
			else:
				time.sleep(0.05)
#t = 1569659790389//1000
#print( datetime.fromtimestamp(t))
def Read_pickle(path):
	#os.path.join(current_path, "ad_Data.pk")
	with open (path, 'rb') as fp:
		return  pickle.load(fp)

def get_list_ad(info):
	page, Listpage, LIMIT, stop, dic_ad_id_exist  = info
	response = requests.get("https://gateway.chotot.com/v1/public/ad-listing?o="+str((page-1)*LIMIT)+"&limit="+str(LIMIT)+"&page="+str(page))
	if response.status_code != 200:
		print("get_list_ad() error, ", response.status_code, page)
	else:
		data = response.json()
		dup = 0
		for info in data['ads']:
			id = info["list_id"]
			if not id in dic_ad_id_exist:
				dic_ad_id_exist[id] = True
			else:
				dup+=1
		if dup == LIMIT:
			print("duplicate data!")
			stop[0] = True
		else:
			for index, info in enumerate(data['ads']):
				if "subject" in info:
					data['ads'][index]["subject"] = compound_unicode(info["subject"])
				if "body" in info:
					data['ads'][index]["body"] = compound_unicode(info["body"])
			Listpage.append(data)



def Del_field(data, listfield):
	#print(data.keys())
	for field in listfield:
		if field in data:
			data.pop(field)
		#else:
		#	print("field not found", field)

def Index_from_page(pages):
	#pages = Read_pickle(os.path.join(current_path, "ad_Data.pk"))
	BulkCPU1 = ESBulk("ads_params_life")
	Listpage = []
	MAX_BULK = 100
	ListBulk = []
	for index, page in enumerate(pages) :
		Listpage.append(page)
		#es.index()
		print("page: ", index)
		for info in page['ads']:
			Del_field(info, ["date", "image", "avatar", "shop"])
			if "subject" in info:
				info["subject"] = compound_unicode(info["subject"])
			if "body" in info:
				info["body"] = compound_unicode(info["body"])

			id = info["list_id"]
			BulkCPU1.Add(info, id)
	BulkCPU1.Send()


class ESBulk():
	ListBulk = []
	ListQuey = []
	#index_name
	#doc_type
	def __init__(self, index_name , doc_type ="_doc", max = 200 ):
		self.Set(index_name, doc_type, max)
	def Set(self,  index_name = False, doc_type = False, max = False):
		if max!= False:
			self.MAX_BULK = max
		if index_name!= False:
			self.index_name = index_name
			if not index_name.islower():
				print("index_name must lowercase!")
		if doc_type!= False:
			self.doc_type = doc_type
	def Add(self, data, id):
		data = {"_index":self.index_name ,"_type": self.doc_type,"_id": id,"_source":data}
		self.ListBulk.append(data)
		if len(self.ListBulk) % self.MAX_BULK == 0:
			self.Send()
	def Search(self, query):
		self.ListQuey.append({"index": self.index_name, "type":"_doc"})
		self.ListQuey.append(query)
		if len(self.ListQuey)//2 % self.MAX_BULK == 0:
			KQ = es.msearch(body=self.ListQuey)
			self.ListQuey = []
			return KQ
			


	def Send(self):
		helpers.bulk(es, self.ListBulk)
		self.ListBulk = []


def index_new_data(Listpage = [], dic_ad_id_exist = {}, nthread = 15):
	st = time.time()
	stop = [False]
	threadlimit = Thread_limit(nthread)
	for pages in Listpage:
		for info in pages['ads']:
			id = info["list_id"]
			if not id in dic_ad_id_exist:
				dic_ad_id_exist[id] = True
	for page in range(1, 10000):
		threadlimit.Stack()
		infothread = [page, Listpage, 50, stop, dic_ad_id_exist]
		threading.Thread(target=threadlimit.run, args=( get_list_ad, infothread)).start()
		if stop[0]:
			break
		
	threadlimit.whilefinish()
	with open(os.path.join(current_path, "ad_Data.pk"), 'wb') as fp:
		pickle.dump(Listpage, fp)
	# setting = {
	# "index" : {
	# 	"number_of_replicas":0
	# }
	# }
	# es.indices.put_settings(
	# 				index="ads_params_life",
	# 				body=setting,
	# 				ignore_unavailable=True
	# 		)


def recommendation_system_get(subject, category, region, area, price, index = "ads_params_life"):
	query = {
		"query": {
			"bool": {
				"must": {
					"match": {
						"subject": subject
					}
				},
				"filter": [
					{
						"match": {
							"category": category
						}
					},
					{
						"match": {
							"region": region
						}
					},
					{
						"match": {
							"area": area
						}
					}
				],
				"should": [
					{
						"range": {
							"price": {
								"gte": price*0.8,
								"lte": price*1.2
							}
						}
					}
				]
			}
		}
	}
	#query["query"]["bool"]["should"] = {"match": {"subject": "256G"}}
	#print(es.search(index=index, body=query, filter_path=['hits.hits._id']))
	KQ = es.search(index=index, body=query)
	dic_id_ad = {"data":[]}
	list_id_ad = {"data":[]}
	#subject, price_string, date, area_name, number_of_images, image
	for index, hit in enumerate(KQ["hits"]["hits"]) :
		list_id_ad["data"].append(hit["_id"])
		dic_id_ad["data"].append( hit["_source"])
	return list_id_ad
#index_new_data()

from flask import Flask, request, jsonify, send_from_directory
import socket 
import os, inspect

IPv4 = socket.gethostbyname(socket.gethostname())
print(IPv4)
Paths = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
app = Flask(__name__, static_url_path='')
#list_id = recommendation_system_get("iphone x ZIN 100%", 5010, 13, 112, 13000000)
#print(list_id)
#exit()
@app.route('/aa', methods=['GET']) #GET requests will be blocked
def aa():
	return {1: 3}
@app.route('/recommendation-system', methods=['POST']) #GET requests will be blocked
def recommendation_system():
	
	#{"subject": request.get_json()["ad"]["subject"], "category": request.get_json()["ad"]["category"], "region": request.get_json()["ad"]["region"], "area": request.get_json()["ad"]["area"] , "price": request.get_json()["ad"]["price"]}
	print(request.get_json()["ad"]["subject"])
	subject = request.get_json()["ad"]["subject"]
	category = request.get_json()["ad"]["category"]
	region = request.get_json()["ad"]["region"]
	area = request.get_json()["ad"]["area"]
	price = request.get_json()["ad"]["price"]
	list_id = recommendation_system_get(subject, category, region, area, price)
	return list_id

@app.route('/user_interaction', methods=['POST']) #GET requests will be blocked
def user_interaction():
	if "ad" in request.get_json():
		return {"thông báo": "sai cấu trúc {'event_name': 'click/chat/call', <những thông tin trong trường ad>=> 'ad_id': '...', 'list_id': '...' ,...}"}
	if not "event_name" in request.get_json():
		return {"thông báo": "thiếu trường 'event_name': 'click/chat/call'"}
	return es.index(index="user_interaction", body=request.get_json())

app.run( host = "192.168.1.97", debug=False, port=5000)
# app.run( debug=False, port=5000)

#Listpage = Read_pickle(os.path.join(current_path, "ad_Data.pk"))
#Index_from_page(Listpage)
#dic_ad_id_exist = {}
#index_new_data(Listpage, dic_ad_id_exist)
#exit()