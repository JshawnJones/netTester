package com.Justin.networkTester.secureweb;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;



public class CsvReader {

	//get list of users and poassworrds
	public HashMap<String, String> loadUserPassList(String fileName) throws IOException {

		HashMap<String, String> userAccounts = new HashMap<String, String>();
		

		BufferedReader br = new BufferedReader(new FileReader("C:/networkTester/src/main/resources/static/csv/"+fileName));
        String line = br.readLine();

        while ((line = br.readLine()) !=null) {
        	userAccounts.put(line.split(",")[1], line.split(",")[2]);
        	}
        br.close();
		
		
		return userAccounts;
		
	}
	
	//get list of users and roles
	public HashMap<String, String> loadUserRoleList(String fileName) throws IOException {
		
		HashMap<String, String> userAccounts = new HashMap<String, String>();
		
		BufferedReader br = new BufferedReader(new FileReader("C:/networkTester/src/main/resources/static/csv/"+fileName));
        String line = br.readLine();
        while ((line = br.readLine()) !=null) {
        	userAccounts.put(line.split(",")[1], line.split(",")[3]);
        	}
        br.close();
		
		
		return userAccounts;
		
	}
	
	

	//get list of users and profilepic
	public HashMap<String, String> loadUserPicList(String fileName) throws IOException {
		
		HashMap<String, String> userAccounts = new HashMap<String, String>();
		
		BufferedReader br = new BufferedReader(new FileReader("C:/networkTester/src/main/resources/static/csv/"+fileName));
        String line = br.readLine();
        while ((line = br.readLine()) !=null) {
        	userAccounts.put(line.split(",")[1], line.split(",")[2]);
        	}
        br.close();
		
		
		return userAccounts;
		
	}
	
	//rewrite the contents of csv
	public void rewriteProfileCsv(String fileName, String oldItem, String newItem) throws IOException {
		
		BufferedReader br = new BufferedReader(new FileReader("C:/networkTester/src/main/resources/static/csv/"+fileName));
		String tempFile = "tmp_"+fileName;
		BufferedWriter bw = new BufferedWriter(new FileWriter("C:/networkTester/src/main/resources/static/csv/"+tempFile));
		//add an inital buffer line
		bw.write("\n");
        String line = br.readLine();
        while ((line = br.readLine()) !=null) {
        
        	if(line.contains(oldItem)) {

        		String item1 = line.split(",")[0];
        		String item2 = line.split(",")[2];

        		bw.write(item1 + ","+newItem+","+item2+"\n");
        	}else {
        		bw.write(line+"\n");
        	}
        	
        }
        br.close();
        bw.close();
        // Once everything is complete, delete old file..
        File oldFile = new File("C:/networkTester/src/main/resources/static/csv/"+fileName);
        oldFile.delete();

        // And rename tmp file's name to old file name
        File newFile = new File("C:/networkTester/src/main/resources/static/csv/"+tempFile);
        newFile.renameTo(oldFile);
        
        
	}
	
	//rewrite the contents of csv
	public void rewriteUsersCsv(String fileName, String oldItem, String newItem) throws IOException {
		
		BufferedReader br = new BufferedReader(new FileReader("C:/networkTester/src/main/resources/static/csv/"+fileName));
		
		String tempFile = "tmp_"+fileName;
		BufferedWriter bw = new BufferedWriter(new FileWriter("C:/networkTester/src/main/resources/static/csv/"+tempFile));
		
        String line = br.readLine();
      //add an inital buffer line
        bw.write("\n");
        while ((line = br.readLine()) !=null) {
        
        	if(line.contains(oldItem)) {

        		String item1 = line.split(",")[0];
        		String item2 = line.split(",")[2];
        		String item3 = line.split(",")[3];

        		bw.write(item1 + ","+newItem+","+item2+","+item3+"\n");
        	}else {
        		bw.write(line+"\n");
        	}
        	
        }
        br.close();
        bw.close();
        // Once everything is complete, delete old file..
        File oldFile = new File("C:/networkTester/src/main/resources/static/csv/"+fileName);
        oldFile.delete();

        // And rename tmp file's name to old file name
        File newFile = new File("C:/networkTester/src/main/resources/static/csv/"+tempFile);
        newFile.renameTo(oldFile);
        
        
	}
	
}
