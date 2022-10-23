import { BadRequestException } from '@nestjs/common/exceptions';
import { ERROR_MESSAGES } from 'src/constants/errorMessages';
import { DEFAULT_PAGE_SIZE, QUERY_LIMIT } from 'src/constants/number';
import { PaginationDTO } from 'src/shared/dto/pagination.dto';

export function getPaginationOptions(pagination: PaginationDTO): PaginationDTO {
  if (!pagination) {
    return {
      startIndex: 0,
      itemCount: DEFAULT_PAGE_SIZE,
    };
  }
  if (
    typeof pagination.itemCount === 'number' &&
    pagination.itemCount > QUERY_LIMIT
  ) {
    throw new BadRequestException(
      ERROR_MESSAGES.paginationMaxSize(QUERY_LIMIT),
    );
  }
  return pagination;
}
