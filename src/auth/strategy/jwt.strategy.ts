import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
// jwt.strategy.ts
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey',//ENV MISSING
    });
  }

  async validate(payload: any) {
    // El payload es lo que guardaste en el token (ej: { id: user.id, role: user.role })
    return { userId: payload.id, role: payload.role };
  }
}
