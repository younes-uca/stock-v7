package ma.sir.easystock.zynerator.security.common;

public interface SecurityParams {
    public static final String JWT_HEADER_NAME="Authorization";
    public static final String SECRET="df1f8fc4-dd07-4685-a89c-681ef580652c";
    public static final long EXPIRATION=86400000;
    public static final String HEADER_PREFIX="Bearer ";
}
