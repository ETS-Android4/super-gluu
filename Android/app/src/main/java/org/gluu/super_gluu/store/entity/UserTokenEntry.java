package org.gluu.super_gluu.store.entity;

import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.Index;
import androidx.room.PrimaryKey;

import org.gluu.super_gluu.u2f.v2.model.TokenEntry;

import java.util.Random;

// NOTE: prevents a table from having two rows that contain the same set of values for the application and userName columns
@Entity(tableName = "userTokenEntry", indices = {@Index(value = {"application", "userName"}, unique = true)})
public class UserTokenEntry {

    @PrimaryKey(autoGenerate = true)
    private long id;

    @ColumnInfo(name = "keyPair")
    private String keyPair;

    @ColumnInfo(name = "application")
    private String application;

    @ColumnInfo(name = "authenticationType")
    private String authenticationType;

    @ColumnInfo(name = "authenticationMode")
    private String authenticationMode;

    @ColumnInfo(name = "keyHandle")
    private byte[] keyHandle;

    @ColumnInfo(name = "keyName")
    private String keyName;

    @ColumnInfo(name = "issuer")
    private String issuer;

    @ColumnInfo(name = "userName")
    private String userName;

    @ColumnInfo(name = "createdDate")
    private String createdDate;

    public UserTokenEntry(TokenEntry tokenEntry) {
        this.id = new Random().nextLong();
        this.keyPair = tokenEntry.getKeyPair();
        this.application = tokenEntry.getApplication();
        this.authenticationType = tokenEntry.getAuthenticationType();
        this.authenticationMode = tokenEntry.getAuthenticationMode();
        this.keyHandle = tokenEntry.getKeyHandle();
        this.keyName = tokenEntry.getKeyName();
        this.issuer = tokenEntry.getIssuer();
        this.userName = tokenEntry.getUserName();
        this.createdDate = tokenEntry.getCreatedDate();
    }
    public UserTokenEntry(long id, String keyPair, String application, String authenticationType, String authenticationMode, byte[] keyHandle, String keyName, String issuer, String userName, String createdDate) {
        this.id = id;
        this.keyPair = keyPair;
        this.application = application;
        this.authenticationType = authenticationType;
        this.authenticationMode = authenticationMode;
        this.keyHandle = keyHandle;
        this.keyName = keyName;
        this.issuer = issuer;
        this.userName = userName;
        this.createdDate = createdDate;
    }

    public long getId() {
        return id;
    }

    public String getKeyPair() {
        return keyPair;
    }

    public String getApplication() {
        return application;
    }

    public String getAuthenticationType() {
        return authenticationType;
    }

    public String getAuthenticationMode() {
        return authenticationMode;
    }

    public byte[] getKeyHandle() {
        return keyHandle;
    }

    public String getKeyName() {
        return keyName;
    }

    public String getIssuer() {
        return issuer;
    }

    public String getUserName() {
        return userName;
    }

    public String getCreatedDate() {
        return createdDate;
    }
}